import { useContext, useEffect, useState, useMemo } from 'react';
import * as C from './styles';

import { Context } from '../../../contexts/Contexts';

export const Form = () => {
  const { theme } = useContext(Context);

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
  const ddiList: string[] = [ '+1', '+7', '+20', '+27', '+30', '+31', '+32', '+33', '+34', '+36', '+39', '+40', '+41', '+43', '+44', '+45', '+46', '+47', '+48', '+49', '+51', '+52', '+53', '+54', '+55', '+56', '+57', '+58', '+60', '+61', '+62', '+63', '+64', '+65', '+66', '+81', '+82', '+84', '+86', '+90', '+91', '+92', '+93', '+94', '+95', '+98', '+212', '+213', '+216', '+218', '+220', '+221', '+222', '+223', '+224', '+225', '+226', '+227', '+228', '+229', '+230', '+231', '+232', '+233', '+234', '+235', '+236', '+237', '+238', '+239', '+240', '+241', '+242', '+243', '+244', '+245', '+246', '+247', '+248', '+249', '+250', '+251', '+252', '+253', '+254', '+255', '+256', '+257', '+258', '+260', '+261', '+262', '+263', '+264', '+265', '+266', '+267', '+268', '+269', '+269', '+290', '+290', '+291', '+297', '+298', '+299', '+350', '+351', '+352', '+353', '+354', '+355', '+356', '+357', '+358', '+359', '+370', '+371', '+372', '+373', '+374', '+375', '+376', '+377', '+378', '+379', '+380', '+381', '+382', '+385', '+386', '+387', '+388', '+389', '+420', '+421', '+423', '+500', '+501', '+502', '+503', '+504', '+505', '+506', '+507', '+508', '+509', '+590', '+591', '+592', '+593', '+594', '+595', '+596', '+597', '+598', '+599', '+670', '+672', '+673', '+674', '+675', '+676', '+677', '+678', '+679', '+680', '+681', '+682', '+683', '+685', '+686', '+687', '+688', '+689', '+690', '+691', '+692', '+800', '+808', '+850', '+852', '+853', '+855', '+856', '+870', '+878', '+880', '+881', '+882', '+883', '+886', '+888', '+960', '+961', '+962', '+963', '+964', '+965', '+966', '+967', '+968', '+970', '+971', '+972', '+973', '+974', '+975', '+976', '+977', '+979', '+991', '+992', '+993', '+994', '+995', '+996', '+998' ];
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
      alert('Message sent successfully!');
    }
    if (name === '') {
      setNameAlert('Please fill in the name field');
      setShowNameAlert(true);
    }
    if (email === '') {
      setEmailAlert('Please fill in the email field');
      setShowEmailAlert(true);
    } else if (!emailRegex.test(email)) {
      setEmailAlert('Invalid email!');
      setShowEmailAlert(true);
    }
    
    if (phone.length === 0) {
      setPhoneAlert('Please fill in the phone field');
      setShowPhoneAlert(true);
    } else if (selectedDdi === '+55' && phone.length > 0 && phone.length < 11) {
      setPhoneAlert('Invalid phone!');
      setShowPhoneAlert(true);
    }

    if (message === '') {
      setMessageAlert('Please fill in the message field');
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
            placeholder='Name*'
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
            placeholder='Email*'
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
              {ddiList.map((code: string, index:number) => 
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
              placeholder='Phone*'
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
            placeholder='Message*'
            required
          />
          <p>{messageAlert}</p>
        </div>
      </div>
      
      <button onClick={handleClickSubmit}>
        <p>Send Message</p>
        <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M10 14L21 3' stroke='#374047' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
          <path d='M20.9996 3L14.4996 21C14.4557 21.0957 14.3853 21.1769 14.2966 21.2338C14.208 21.2906 14.1049 21.3209 13.9996 21.3209C13.8943 21.3209 13.7912 21.2906 13.7025 21.2338C13.6139 21.1769 13.5435 21.0957 13.4996 21L9.99958 14L2.99958 10.5C2.90384 10.4561 2.82271 10.3857 2.76583 10.2971C2.70895 10.2084 2.67871 10.1053 2.67871 10C2.67871 9.89468 2.70895 9.79158 2.76583 9.70295C2.82271 9.61431 2.90384 9.54387 2.99958 9.5L20.9996 3Z' stroke='#374047' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
        </svg>
      </button>
    </C.Form>
  );
};
