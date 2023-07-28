interface Projects {
    id: number;
    src: string;
    href: string;
    website: string;
    publishDate: string;
    listItems: string[];
  }

type DataFunction = () => Projects[];

export function filterDataByListItem(dataFunction: DataFunction, filterCriteria: string) {
    const dataObjects = dataFunction();
    const lowerCaseFilter = filterCriteria.toLowerCase(); // Convert filterCriteria to lowercase
    return dataObjects.filter((dataObject: Projects) => {
      return dataObject.listItems.some((item) => item.toLowerCase().includes(lowerCaseFilter));
    });
  }