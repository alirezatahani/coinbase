export const timstampToDate = (timestamp: number) => {
    var a = new Date(timestamp * 1000);
    var year = a.getFullYear();
    var month = a.getMonth();
    var date = a.getDate();
    var time = date + "/" + month + "/" + year + " ";
    return time;
  };