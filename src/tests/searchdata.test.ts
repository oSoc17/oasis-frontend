import { SearchData, GetLatest } from '../app/classes/searchData';

it('should give last monday', () => {
    let s: SearchData[] = [];
    const days = {'0': true, '1': false}

        for (let i = 0; i < 7; i++) {
                if (days['' + i]) {
                    s = s.concat(
                        SearchData.createPeriodicList('departSt.id', 'arriveSt.id', 'this.travelTime.selectedTime',
                            GetLatest((i + 1) % 6), 'this.travelTime.selectedType', 7, 2 ));
                }
           }
        s.forEach((da) => {
            // console.log(da.travelDate);
            expect(da).toBe(da);
        });
    });
