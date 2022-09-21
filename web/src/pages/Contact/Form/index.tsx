import { useContext, useEffect, useState, useMemo } from 'react';
import * as C from './styles';

import { Context } from '../../../contexts/Contexts';
import { pageInfo } from '../../../data/PageInfo';
import { svgs } from '../../../data/SvgList';

export const Form = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  const form = {
    name: {
      placeHolder: pageInfo.contact.form.name.placeHolder[ lang as keyof typeof pageInfo.contact.form.name.placeHolder ],
      alert: {
        empty: pageInfo.contact.form.name.alert.empty[ lang as keyof typeof pageInfo.contact.form.name.alert.empty ]
      }
    },
    email: {
      placeHolder: pageInfo.contact.form.email.placeHolder[ lang as keyof typeof pageInfo.contact.form.email.placeHolder ],
      alert: {
        empty: pageInfo.contact.form.email.alert.empty[ lang as keyof typeof pageInfo.contact.form.email.alert.empty ],
        invalid: pageInfo.contact.form.email.alert.invalid[ lang as keyof typeof pageInfo.contact.form.email.alert.invalid ]
      }
    },
    phone: {
      placeHolder: pageInfo.contact.form.phone.placeHolder[ lang as keyof typeof pageInfo.contact.form.phone.placeHolder ],
      alert: {
        empty: pageInfo.contact.form.phone.alert.empty[ lang as keyof typeof pageInfo.contact.form.phone.alert.empty ],
        invalid: pageInfo.contact.form.phone.alert.invalid[ lang as keyof typeof pageInfo.contact.form.phone.alert.invalid ]
      },
      ddiList: pageInfo.contact.form.phone.ddiList
    },
    message: {
      placeHolder: pageInfo.contact.form.message.placeHolder[ lang as keyof typeof pageInfo.contact.form.message.placeHolder ],
      alert: {
        empty: pageInfo.contact.form.message.alert.empty[ lang as keyof typeof pageInfo.contact.form.message.alert.empty ],
      },
      send: pageInfo.contact.form.message.send[ lang as keyof typeof pageInfo.contact.form.message.send ]
    },
    button: pageInfo.button.sendMessage[ lang as keyof typeof pageInfo.button.sendMessage ]
  }

  const [ name, setName ] = useState<string>('');
  const [ nameAlert, setNameAlert ] = useState<string>('');
  const [ showNameAlert, setShowNameAlert ] = useState<boolean>(false);
  const [ isValitedName, setIsValitedName ] = useState<boolean>(false);

  const [ email, setEmail ] = useState<string>('');
  const [ emailAlert, setEmailAlert ] = useState<string>('');
  const [ showEmailAlert, setShowEmailAlert ] = useState<boolean>(false);
  const [ isValitedEmail, setIsValitedEmail ] = useState<boolean>(false);
  const emailRegex = useMemo(() => new RegExp (/^(([^<>()\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), [])

  const [ phone, setPhone ] = useState<string>('');
  const [ phoneAlert, setPhoneAlert ] = useState<string>('');
  const [ showPhoneAlert, setShowPhoneAlert ] = useState<boolean>(false);
  const [ isValitedPhone, setIsValitedPhone ] = useState<boolean>(false);
  const [ selectedDdi, setSelectedDdi ] = useState<string>('+55');

  const [ message, setMessage ] = useState<string>('');
  const [ messageAlert, setMessageAlert ] = useState<string>('');
  const [ showMessageAlert, setShowMessageAlert ] = useState<boolean>(false);
  const [ isValitedMessage, setIsValitedMessage ] = useState<boolean>(false);

  useEffect(() => {
    if (name !== '') {
      setNameAlert('');
      setShowNameAlert(false);
      setIsValitedName(true);
    } else setIsValitedName(false);

    if (email !== '') {
      setEmailAlert('');
      setShowEmailAlert(false);
      emailRegex.test(email) ? setIsValitedEmail(true) : setIsValitedEmail(false);
    } else setIsValitedEmail(false);

    if (selectedDdi !== '+55' && phone.length > 0) {
      setPhoneAlert('');
      setShowPhoneAlert(false);
      setIsValitedPhone(true);
    } else if (selectedDdi === '+55' && phone.length >= 11) {
        setPhoneAlert('');
        setShowPhoneAlert(false);
        setIsValitedPhone(true);
    } else setIsValitedPhone(false);

    if (message !== '') {
      setMessageAlert('');
      setShowMessageAlert(false);
      setIsValitedMessage(true);
    } else setIsValitedMessage(false);
  }, [name, email, emailRegex, selectedDdi, phone, message]);

  const validateForm = () => { return (isValitedName && isValitedEmail && isValitedPhone && isValitedMessage) ? true : false; }

  const handleClickSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      alert(form.message.send);
    }
    if (name === '') {
      setNameAlert(form.name.alert.empty);
      setShowNameAlert(true);
    }
    if (email === '') {
      setEmailAlert(form.email.alert.empty);
      setShowEmailAlert(true);
    } else if (!emailRegex.test(email)) {
      setEmailAlert(form.email.alert.invalid);
      setShowEmailAlert(true);
    }
    
    if (phone.length === 0) {
      setPhoneAlert(form.phone.alert.empty);
      setShowPhoneAlert(true);
    } else if (selectedDdi === '+55' && phone.length > 0 && phone.length < 11) {
      setPhoneAlert(form.phone.alert.invalid);
      setShowPhoneAlert(true);
    }

    if (message === '') {
      setMessageAlert(form.message.alert.empty);
      setShowMessageAlert(true);
    }
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+/g, ''));
  }
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleChangeDdi = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedDdi(e.target.value);
  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value.replace(/\D/g, ''));
  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

  return (
    <C.Form
      action='/contact'
      mode={theme.mode.status}
    >
      <div className='container'>
        <div>
          <C.Input
            onChange={handleChangeName}
            mode={theme.mode.status}
            alert={showNameAlert}
            isValited={isValitedName}
            id='name'
            name='name'
            type='text'
            value={name}
            placeholder={form.name.placeHolder}
            required
          />
          <p>{nameAlert}</p>
        </div>
        <div>
          <C.Input
            onChange={handleChangeEmail}
            mode={theme.mode.status}
            alert={showEmailAlert}
            isValited={isValitedEmail}
            id='email'
            name='email'
            type='email'
            value={email}
            placeholder={form.email.placeHolder}
            required
          />
          <p>{emailAlert}</p>
        </div>
        <div>
          <div className='container-fone'>
            <C.Select
              onChange={handleChangeDdi}
              mode={theme.mode.status}
              value={selectedDdi}
            >
              {form.phone.ddiList.map((code: string, index:number) => 
                <option key={index} value={code}>{code}</option>
              )}
            </C.Select>
            <C.Input
              onChange={handleChangePhone}
              mode={theme.mode.status}
              alert={showPhoneAlert}
              isValited={isValitedPhone}
              id='phone'
              name='phone'
              type='text'
              value={phone}
              maxLength={(selectedDdi === '+55' ? 11 : 20)}
              placeholder={form.phone.placeHolder}
              required
            />
          </div>
          <p>{phoneAlert}</p>
        </div>
        <div>
          <C.TextArea
            onChange={handleChangeMessage}
            mode={theme.mode.status}
            alert={showMessageAlert}
            isValited={isValitedMessage}
            id='message'
            name='message'
            rows={7}
            value={message}
            placeholder={form.message.placeHolder}
            required
          />
          <p>{messageAlert}</p>
        </div>
      </div>
      
      <button onClick={handleClickSubmit}>
        <p>{form.button}</p>
        {svgs.systemIcon.send}
      </button>
    </C.Form>
  );
};
