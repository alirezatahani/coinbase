interface OptionInterface {
  value: string;
  sign?: string;
  label: string;
}
export type ActionBarProps = {
  handleTimePeriod: (value: string) => void;
  handleCurrency: (value: string, options: OptionInterface) => void;
  currency: string;
};
