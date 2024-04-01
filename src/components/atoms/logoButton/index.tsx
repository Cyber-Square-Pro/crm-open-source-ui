import logo from '../../../assets/images/logo.png';

interface Props {
    
}

export default function SideContent( {}: Props) {
    return(
    <div>
        <img
        src={logo}
        alt="IDURAR ERP CRM"
        style={{ margin: '0 auto 40px', display: 'block' }}
        height={63}
        width={220}/>
    </div>
    );
}