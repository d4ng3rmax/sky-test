import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(collection: Array<any>, category: string): Array<any> {
    if (!collection) {
      return null;
    }

    const groupedCollection = collection.reduce((previous, current) => {
      if (!previous[current[category]]) {
        previous[current[category]] = [current];
      } else {
        previous[current[category]].push(current);
      }
      console.log('previous', previous)
      return previous;
    }, {});
    
    console.log('current', Object.keys(groupedCollection))
    return Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));

    // console.log('prop', category)
    // return collection;
  }

}
