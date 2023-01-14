export type CoinListProps = {
  loading?: boolean;
  error?:string;
  data: {}[];
  hasMore?:boolean;
  handleOffset?:()=>void;
  searchCoin?:string
};
