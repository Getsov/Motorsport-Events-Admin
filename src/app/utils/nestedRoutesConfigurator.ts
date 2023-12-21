import { first } from 'rxjs';

export function setDualRoutes(
  firstOption: string,
  secondOption: string
): { firstRoute: string; secondRoute: string } {
  let firstRoute = '';
  let secondRoute = '';

  if (
    firstOption === 'Чакащи събития' &&
    secondOption === 'Чакащи организатори'
  ) {
    firstRoute = 'awaiting-events';
    secondRoute = 'awaiting-organizers';
  } else if (
    firstOption === 'Предстоящи събития' &&
    secondOption === 'Отминали Събития'
  ) {
    firstRoute = 'upcoming-events';
    secondRoute = 'past-events';
  } else {
    firstRoute = 'Invalid parameters';
    secondRoute = 'Invalid parameters';
  }

  return { firstRoute, secondRoute };
}

export function setTripleRoutes(
  firstOption: string,
  secondOption: string,
  thirdOption: string
) {
  let firstRoute = '';
  let secondRoute = '';
  let thirdRoute = '';
  if (
    firstOption === 'Администраторски акаунти' &&
    secondOption === 'Организаторски акаунти' &&
    thirdOption === 'Потребителски акаунти'
  ) {
    firstRoute = 'admin-accounts';
    secondRoute = 'organizer-accounts';
    thirdRoute = 'user-accounts';
  } else {
    firstRoute = 'Invalid parameters';
    secondRoute = 'Invalid parameters';
    thirdRoute = 'Invalid parameters';
  }

  return { firstRoute, secondRoute, thirdRoute };
}
