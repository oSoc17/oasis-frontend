import { QoE } from '../app/classes/connections/qoe';
import { UserPreferencesMock } from '../app/classes/mocks/userprefs.mock';
import { RouteHistory } from '../app/classes/connections/routeHistory';
import { instance, mock, when } from 'ts-mockito';
import { Route } from '../app/classes/connections/route';
import { SearchData} from '../app/classes/connections/searchData';
import {Manager} from '../app/classes/connections/manager';

/**
 * Test QoE constructor
 */
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

/**
 * Check for runtime errors
 */
describe('QoE.ts', () => {
  it('should just run', () => {
    // setup
    const mockedRouteHistory: RouteHistory = mock(RouteHistory);
    when(mockedRouteHistory.getAvgChangesAmount()).thenReturn(2.5);
    when(mockedRouteHistory.getAvgDelay()).thenReturn(new Date(0));
    when(mockedRouteHistory.getDelayConsistency()).thenReturn(new Date(0));
    when(mockedRouteHistory.getAvgChangeTime()).thenReturn(new Date(0));
    when(mockedRouteHistory.getAvgTravelTime()).thenReturn(new Date(0));
    const qoe = new QoE(new RouteHistory([]), new UserPreferencesMock);
    // execution
    expect(qoe.getAvgChangesAmount().score).toEqual(jasmine.any(Number));
    expect(qoe.getAvgDelay().score).toEqual(jasmine.any(Number));
    expect(qoe.getDelayConsistency().score).toEqual(jasmine.any(Number));
    expect(qoe.getAvgChangeTime().score).toEqual(jasmine.any(Number));
    expect(qoe.getQoE()).toEqual(jasmine.any(Number));
  });
});
