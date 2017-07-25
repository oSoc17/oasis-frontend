// Node modules
import { Component, Input } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

// Custom modules
import { Utils } from '../../classes/utils/utils';
import { Language } from '../../classes/userData/language';
import { QoE } from '../../classes/connections/qoe';
import { Change } from '../../classes/connections/change';
import { TripscoreService } from '../../services/tripscore.service';

@Component({
    selector: 'route',
    templateUrl: './templates/route.component.html',
    styleUrls: ['./styles/route.component.scss']
})

/**
 * A single dropdown card used to display the global score and subscores of one route and it's historic data
 */
export class Route {
    language: Language = new Language();
    @Input() qoe: QoE;
    changes: Change[];
    tripScoreService: TripscoreService;

    constructor(iconReg: MdIconRegistry, sanitizer: DomSanitizer, tripScoreService: TripscoreService) {
        this.tripScoreService = tripScoreService;
        iconReg.addSvgIcon('delay', sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/delay.svg'))
            .addSvgIcon('hop_missed', sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/hop_missed.svg'))
            .addSvgIcon('hop_wait', sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/hop_wait.svg'))
            .addSvgIcon('hops', sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/hops.svg'))
            .addSvgIcon('travel_time', sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/travel_time.svg'))
            .addSvgIcon('consistency', sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/consistency.svg'));
    }

    /**
     * Generate an array of all subscores responsible for the QoE calculations
     */
    private getSubScores() {
        if (this.qoe) {
            this.getChanges();
            return [{
                name: this.language.getMessage('avgTravelTime'),
                tooltip: this.language.getMessage('travelTime_tooltip') + '\n\nfoo',
                value: Utils.toUTCTime(this.qoe.getAvgTravelTime().value.valueOf()),
                icon: 'travel_time'
            },
            {
                name: this.language.getMessage('delay'),
                tooltip: this.language.getMessage('delay_tooltip'),
                value: this.qoe.getAvgDelay().value.valueOf() / 60000.0 + this.language.getMessage('minutes'),
                icon: 'delay',
            },
            {
                name: this.language.getMessage('delayConsistency'),
                tooltip: this.language.getMessage('delayConsistency_tooltip'),
                value: this.qoe.getDelayConsistency().value + '%',
                icon: 'consistency'
            },
            {
                name: this.language.getMessage('amountOfChanges'),
                tooltip: this.language.getMessage('amountOfChanges_tooltip'),
                value: Math.round(this.qoe.getAvgChangesAmount().value),
                icon: 'hops'
            },
            {
                name: this.language.getMessage('changeTime'),
                tooltip: this.language.getMessage('changeTime_tooltip'),
                value: this.qoe.getAvgChangesAmount().value ? Utils.toUTCTime(this.qoe.getAvgChangeTime().value.valueOf()) : '--:--',
                icon: 'hop_wait'
            }];

        }
    }

    /**
     * Gets an array of all the changes
     */
    private getChanges() {
        if (this.changes) {
            return;
        }
        const changes = this.qoe.getChanges();
        const count = changes.length;
        for (let i = 0; i < count; i++) {
            this.tripScoreService.searchStation(changes[i].station).then((response) => {
                // console.log(response);
                changes[i].stationName = response[0].standardname;
                if (i === count - 1) {
                    this.changes = changes;
                }
            }).catch (e => console.log(e));
        }
    }

    /**
     * Generate the "based on x connections" string
     */
    public get basedOn(): string{
        return this.language.getMessage('basedOn').replace('XX', this.qoe.amount + '');
    }

    /**
     * Return the presented score as an integer in [0, 10]
     */
    private getScore() {
        return Math.round(this.qoe.getQoE() * 10);

    }

    /**
     * Return time string for a date value
     */
    private toTime(val: number) {
        return Utils.timeStringFromDate(new Date(val));
    }
}
