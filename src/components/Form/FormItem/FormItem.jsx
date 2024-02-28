import s from "./FormItem.module.scss";

const FormItem = ({ children, title }) => {
  return (
    <div className={s.root}>
      {Boolean(title) && <span className={s.label}>{title}</span>}
      {children}
    </div>
  );
};

export default FormItem;
