import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function App() {
  const { t } = useTranslation();

  const handleClick = lang => i18next.changeLanguage(lang);

  return (
    <div className='container-fluid border border-success p-4'>
      <h3>How hardly to say love?</h3>
      <hr />
      <div className='d-flex justify-content-around'>
        <button className='btn btn-success' onClick={() => handleClick('en')}>{t("btn.en")}</button>
        <button className='btn btn-danger' onClick={() => handleClick('zh')}>{t("btn.zh")}</button>
        <button className='btn btn-warning' onClick={() => handleClick('ja')}>{t("btn.ja")}</button>
        <button className='btn btn-info' onClick={() => handleClick('ko')}>{t("btn.ko")}</button>
      </div>
      <hr />
      <div className='d-flex justify-content-center'>
        <h3>{t('love')}</h3>
      </div>
    </div>
  );
}

export default App;
