function BooleanText({ value }: { value?: boolean }) {
  return <>{value ? "Да" : "Нет"}</>;
}

export default BooleanText;
