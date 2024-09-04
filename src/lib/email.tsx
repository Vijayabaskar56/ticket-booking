import { render } from '@react-email/components';
import { Email } from '../../email/Email';

export const emailOptions = {
 from: 'you@example.com',
 to: 'user@gmail.com',
 subject: 'hello world',
 html: render(<Email userFirstname='demo' />),
};
