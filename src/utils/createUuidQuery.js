export function createUuidQuery(array){
    const uuids = array.map((item) => {
        return `uuids[]=${item.uuid}`;
      });
      const uuidsToString = uuids.join("&");
      return uuidsToString
}