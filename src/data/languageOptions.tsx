import UkFlag from '../images/En-Flag.svg';
import DeFlag from '../images/De-Flag.svg';
import { Option } from '../components/Dropdown';

export const languageOptions: Option[] = [
  {
    value: 'English',
    flag: UkFlag,
    code: '+44',
    label: 'EN',
  },
  {
    value: 'German',
    flag: DeFlag,
    code: '+49',
    label: 'DE',
  },
];
