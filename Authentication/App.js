import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Navbar from './Navbar';
import GjendjaCivile from './client/Sherbimet/GjendjaCivile/GjendjaCivile';
import Sherbime from './client/Sherbimet/Sherbime';
import Tatimet from './client/Sherbimet/Tatimet/Tatimet';
import Familja from './client/Sherbimet/Familja/Familja';
import Shendetesia from './client/Sherbimet/Shendetsia/Shendetesia';
import Automjeti from './client/Sherbimet/Automjeti/Automjeti';
import Policia from './client/Sherbimet/Policia/Policia';
import Komunalite from './client/Sherbimet/Komunalite/Komunalite'; 
import Prona from './client/Sherbimet/Prona/Prona';
import Kontributet from './client/Sherbimet/Kontributet/Kontributet';
import Gjyqesori from './client/Sherbimet/Gjyqesori/Gjyqesori';
import ApLehonat from './client/Sherbimet/Familja/ApLehonat';
import ApFemije from './client/Sherbimet/Familja/ApFemije';
import Ekstrakti from './client/Sherbimet/GjendjaCivile/Ekstrakti';
import CertiFam from './client/Sherbimet/GjendjaCivile/CertiFam';
import EkstraFam from './client/Sherbimet/GjendjaCivile/EkstraFam';
import CertiMa from './client/Sherbimet/GjendjaCivile/CertiMa';
import FaturaPer from './client/Sherbimet/Tatimet/FaturaPer';
import Shend1 from './client/Sherbimet/Shendetsia/Shend1';
import Shend2 from './client/Sherbimet/Shendetsia/Shend2';
import Shend3 from './client/Sherbimet/Shendetsia/Shend3';

function App() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Sherbime" element={<Sherbime />} />
          <Route path="/Sherbimet/GjendjaCivile" element={<GjendjaCivile />} />
          <Route path="/Sherbimet/Tatimet" element={<Tatimet />} />
          <Route path="/Sherbimet/Familja" element={<Familja />} />
          <Route path="/Sherbimet/Shendetesia" element={<Shendetesia />} />
          <Route path="/Sherbimet/Automjeti" element={<Automjeti />} />
          <Route path="/Sherbimet/Policia" element={<Policia />} />
          <Route path="/Sherbimet/Komunalite" element={<Komunalite />} />
          <Route path="/Sherbimet/Prona" element={<Prona />} />
          <Route path="/Sherbimet/Kontributet" element={<Kontributet />} />
          <Route path="/Sherbimet/Gjyqesori" element={<Gjyqesori />} />
          <Route path="/Familja/ApLehonat" element={<ApLehonat />} />
          <Route path="/Familja/ApFemije" element={<ApFemije />} />
          <Route path="/GjendjaCivile/Ekstrakti" element={<Ekstrakti />} />
          <Route path="/GjendjaCivile/CertiFam" element={<CertiFam />} />
          <Route path="/GjendjaCivile/EkstraFam" element={<EkstraFam />} />
          <Route path="/GjendjaCivile/CertiMa" element={<CertiMa />} />
          <Route path="/Tatimet/FaturaPer" element={<FaturaPer />} />
          <Route path="/Shendetsia/Shend1" element={<Shend1 />} />
          <Route path="/Shendetsia/Shend2" element={<Shend2 />} />
          <Route path="/Shendetsia/Shend3" element={<Shend3 />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
