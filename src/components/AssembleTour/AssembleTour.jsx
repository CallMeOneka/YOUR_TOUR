import React, { useCallback, useRef, useState } from "react";
import style from "./AssembleTour.module.scss";

const AssembleTour = () => {
  const dateOne = useRef();
  const dateTwo = useRef();
  const [point, setPoint] = useState("");

  const handlePointInput = useCallback(
    (e) => {
      setPoint(e.target.value);
    },
    [setPoint]
  );

  return (
    <section className={style.assembleTour}>
      <h2 className={style.title}>Собери свой тур</h2>
      <p className={style.underTitle}>
        Идейные соображения высшего порядка, <br /> а также рамки и место
        обучения кадров
      </p>
      <form className={style.form}>
        <div className={style.formInputs}>
          <div className={style.formItemInput}>
            <label className={style.labelInput} htmlFor={style.nameInput}>
              Имя
            </label>
            <input
              type='text'
              className={style.textInput}
              id={style.nameInput}
              placeholder='Введите Ваше имя'
            />
          </div>
          <div className={style.formItemInput}>
            <label className={style.labelInput} htmlFor={style.pointInput}>
              Направление
            </label>
            <div className={style.select}>
              <select
                value={point}
                className={`${style.dropdownInput} ${
                  point == "" ? style.default : ""
                }`}
                id={style.pointInput}
                onChange={handlePointInput}>
                <option value='' selected>
                  Выберите пункт
                </option>
                <option className={style.pointOption} value='point'>
                  Пункт
                </option>
                <option className={style.pointOption} value='point'>
                  Пункт
                </option>
                <option className={style.pointOption} value='point'>
                  Пункт
                </option>
              </select>
            </div>
          </div>
          <div className={style.formItemInput}>
            <label className={style.labelInput} htmlFor={style.emailInput}>
              Email
            </label>
            <input
              type='text'
              className={style.textInput}
              id={style.emailInput}
              placeholder='example@mail.com'
            />
          </div>
          <div className={style.formItemInput}>
            <label className={style.labelInput} htmlFor={style.phoneInput}>
              Телефон
            </label>
            <input
              type='tel'
              className={style.textInput}
              id={style.phoneInput}
              placeholder='+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _'
            />
          </div>
          <div className={style.formItemInput}>
            <label className={style.labelInput} htmlFor={style.dateFirstInput}>
              Дата от
            </label>
            <input
              type='text'
              ref={dateOne}
              onFocus={() => (dateOne.current.type = "date")}
              onBlur={() => (dateOne.current.type = "text")}
              className={style.dateInput}
              placeholder='ДД.ММ.ГГГГ'
              id={style.dateFirstInput}
            />
          </div>
          <div className={style.formItemInput}>
            <label className={style.labelInput} htmlFor={style.dateSecInput}>
              Дата до
            </label>
            <input
              type='text'
              ref={dateTwo}
              onFocus={() => (dateTwo.current.type = "date")}
              onBlur={() => (dateTwo.current.type = "text")}
              className={style.dateInput}
              placeholder='ДД.ММ.ГГГГ'
              id={style.dateSecInput}
            />
          </div>
        </div>
        <div className={`${style.formItemInput} ${style.comment}`}>
          <label className={style.labelInput} htmlFor={style.textarea}>
            Комментарий
          </label>
          <textarea
            className={style.textarea}
            id={style.textarea}
            name=''
            cols='30'
            rows='10'></textarea>
        </div>
        <div className={`${style.formItemInput} ${style.comment}`}>
          <p className={style.labelInput}>Вам есть 10 лет?</p>
          <div className={style.radioButtons}>
            <label className={style.radioLabel} htmlFor={style.yesRadio}>
              Да
              <input
                className={style.radio}
                type='radio'
                name='age'
                id={style.yesRadio}
              />
              <span className={style.checkmark}></span>
            </label>

            <label className={style.radioLabel} htmlFor={style.noRadio}>
              Нет
              <input
                className={style.radio}
                type='radio'
                name='age'
                id={style.noRadio}
              />
              <span className={style.checkmark}></span>
            </label>
          </div>
          <div className={style.checkbox}>
            <label className={style.checkboxLabel}>
              <input type='checkbox' />
              <span className={style.checkboxCheckmark}></span>
              Нажимая кнопку, я принимаю условия <b>Лицензионного договора</b>
            </label>
          </div>
          <div className={style.buttons}>
            <button className={`${style.acceptButton} ${style.button}`}>
              Найти тур
            </button>
            <button className={`${style.cancelButton} ${style.button}`}>
              Сбросить
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AssembleTour;
