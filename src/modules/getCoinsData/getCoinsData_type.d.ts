export type GetCoinsDataProps = {
    queries?: {limit?:number,offset:number};
    handleOffset:(page:number)=>void
  };