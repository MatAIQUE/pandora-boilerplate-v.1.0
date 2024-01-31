interface Props {
  label: string;
}
const LabelTitle = ({ label }: Props) => {
  return (
    <div className="text-white text-center font-medium mb-5">
      <span className="text-2xl">{label}</span>
    </div>
  );
};

export default LabelTitle;
