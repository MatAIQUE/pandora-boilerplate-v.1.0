interface Props {
  label: string;
}
const LabelTitle = ({ label }: Props) => {
  return (
    <div className="text-white font-medium mb-5 flex justify-start">
      <span className="text-2xl">{label}</span>
      <span className="text-2xl mb-20">Enter your membership details</span>
    </div>
  );
};

export default LabelTitle;
