interface Props {
  label: string;
}
const LabelTitle = ({ label }: Props) => {
  return (
    <div className="text-white font-medium mb-5 flex justify-start">
      <span className="text-2xl">{label}</span>
    </div>
  );
};

export default LabelTitle;
