import logo from './logo.svg';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
  });
  const [submittedData, setSubmittedData] = useState(null);
}


export default App;

