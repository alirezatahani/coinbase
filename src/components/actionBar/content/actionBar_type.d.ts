interface OptionInterface {
  value: string;
  sign?: string;
  label?: string;
}
export type ActionBarProps = {
  handleTimePeriod: (value: string) => void;
  currency: string;
};
