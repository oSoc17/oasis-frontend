import { QoE } from '../app/classes/qoe';
import { UserPreferencesMock } from '../app/classes/userprefs.mock';
import { RouteHistory } from '../app/classes/routeHistory';
import { instance, mock, when } from 'ts-mockito';
import { Route } from '../app/classes/route';
import { SearchData} from '../app/classes/searchData';
import {Manager} from '../app/classes/manager';

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
    expect(qoe.getAvgChangesAmount().score).toEqual(jasmine.any(Number));
    expect(qoe.getAvgDelay().score).toEqual(jasmine.any(Number));
    expect(qoe.getDelayConsistency().score).toEqual(jasmine.any(Number));
    expect(qoe.getAvgChangeTime().score).toEqual(jasmine.any(Number));
    expect(qoe.getQoE()).toEqual(jasmine.any(Number));
  });
  it('getQoE should be a number', () => {
    // setup
    const mockedRouteHistory: RouteHistory = mock(RouteHistory);
    when(mockedRouteHistory.getAvgChangesAmount()).thenReturn(2.5);
    when(mockedRouteHistory.getAvgDelay()).thenReturn(new Date(0));
    when(mockedRouteHistory.getDelayConsistency()).thenReturn(new Date(0));
    when(mockedRouteHistory.getAvgChangeTime()).thenReturn(new Date(0));
    when(mockedRouteHistory.getAvgTravelTime()).thenReturn(new Date(0));
    const s: SearchData[] = [];
    const qoe = Manager.getQoE(s).then((res) => {
      return res;
    });
    // execution
    let q ;
    qoe.then((res) => {
      q = res.getQoE();
      console.log(q, 'qoe');
    expect( '' + q !== '' + NaN).toBe(true);
    })

  });
});
