import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { EventService } from './event.service';
import { AuthService } from './auth.service';
import { environment } from '../../enviroments/enviroment';
import { Event } from '../interfaces/Event';

describe('EventService', () => {
  let service: EventService;
  let httpMock: HttpTestingController;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        EventService,
        {
          provide: AuthService,
          useValue: {
            userDetails: {
              accessToken: 'test-token',
            },
          },
        },
      ],
    });

    service = TestBed.inject(EventService);
    httpMock = TestBed.inject(HttpTestingController);
    authService = TestBed.inject(AuthService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get events for approval', () => {
    const mockEvents: Event[] = [
      {
        shortTitle: 'Test Event',
        shortDescription: 'Test Description',
        longDescription: 'Long Description',
        visitorPrices: [],
        dates: [],
        imageUrl: '',
        contacts: {
          coordinates: {
            lat: 0,
            lng: 0,
          },
          region: '',
          address: '',
          phone: '',
          email: '',
        },
        categories: [],
        likes: [],
        creator: { email: '', role: '', isDeleted: false },
        isDeleted: false,
        isApproved: false,
        _id: '1',
      },
    ];

    service.getEventsForApproval().subscribe((events) => {
      expect(events).toEqual(mockEvents);
    });

    const req = httpMock.expectOne(
      `${environment.baseUrl}/events/eventsForApproval`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockEvents);
  });
});
