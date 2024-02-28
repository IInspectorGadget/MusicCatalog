import s from "./Error.module.scss";

const Error = ({ dirty, error }) => {
  return dirty && error && <div className={s.root}>*{error}</div>;
};

export default Error;
