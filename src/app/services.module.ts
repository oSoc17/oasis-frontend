/* Services */
import { IRailService  } from './services/iRail.service';
import { StationService } from './services/stations.service';

export class Services {
    public static providers = [ IRailService, StationService ];
}
