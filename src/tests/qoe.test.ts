import { QoE } from '../app/classes/qoe';
import { UserPreferencesMock } from '../app/classes/userprefs.mock';
import { RouteHistory } from '../app/classes/routeHistory';
import { instance, mock, when } from 'ts-mockito';
import { Route } from '../app/classes/route';

/* Constructor test */
describe('QoE.ts constructor', () => {
  it('object should be created', () => {
    // setup
    const mockedRoute: Route = mock(Route);
    const routes: Route[] = [instance(mockedRoute)];
    const routeHistory: RouteHistory = new RouteHistory(routes);
    // execution
    const qoe = new QoE(routeHistory, new UserPreferencesMock);
  });
});

/* RuntimeError test */
describe('QoE.ts', () => {
  it('should just run', () => {
    // setup
    const mockedRouteHistory: RouteHistory = mock(RouteHistory);
    when(mockedRouteHistory.getAvgChangesAmount()).thenReturn(2.5);
    when(mockedRouteHistory.getAvgDelay()).thenReturn(new Date(0));
    when(mockedRouteHistory.getDelayConsistency()).thenReturn(new Date(0));
    when(mockedRouteHistory.getAvgChangeTime()).thenReturn(new Date(0));
    when(mockedRouteHistory.getAvgTravelTime()).thenReturn(new Date(0));
    const qoe = new QoE(instance(mockedRouteHistory), new UserPreferencesMock);
    // execution
      console.log(qoe.getAvgChangesAmount());
      console.log(qoe.getAvgDelay());
      console.log(qoe.getDelayConsistency());
      console.log(qoe.getAvgChangeTime());
      console.log(qoe.getAvgTravelTime());
      console.log(qoe.getQoE());
      console.log(qoe.getPrice());
      console.log(qoe.getNumberOfRoutesWithinHour());
      console.log(qoe.getNumberOfMissedConnections());
  });
});
