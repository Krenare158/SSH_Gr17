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
import Adresa from './client/Sherbimet/Adresa/Adresa';
import Arsimi from './client/Sherbimet/Arsimi/Arsimi';
import AutoT from './client/Sherbimet/Automjeti/AutoT'; 
import AutoB from './client/Sherbimet/Automjeti/AutoB'; 
import AutoP from './client/Sherbimet/Automjeti/AutoP';
import Policia1 from './client/Sherbimet/Policia/Policia1';
import Policia2 from './client/Sherbimet/Policia/Policia2';
import Policia3 from './client/Sherbimet/Policia/Policia3';
import Kesco from'./client/Sherbimet/Komunalite/Kesco'; 
import Kru from'./client/Sherbimet/Komunalite/Kru'; 
import Prona1 from './client/Sherbimet/Prona/Prona1';
import Kon from './client/Sherbimet/Kontributet/Kon';


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
          <Route path="/Sherbimet/Adresa" element={<Adresa />} />
          <Route path="/Sherbimet/Arsimi" element={<Arsimi />} />
          <Route path="/Automjeti/AutoT" element={<AutoT />} />
          <Route path="/Automjeti/AutoB" element={<AutoB />} />
          <Route path="/Automjeti/AutoP" element={<AutoP />} />
          <Route path="/Policia/Policia1" element={<Policia1 />} />
          <Route path="/Policia/Policia2" element={<Policia2 />} />
          <Route path="/Policia/Policia3" element={<Policia3 />} />
          <Route path="/Komunalite/Kesco" element={<Kesco />} />
          <Route path="/Komunalite/Kru" element={<Kru />} />
          <Route path="/Prona/Prona1" element={<Prona1 />} />
          <Route path="/Kontributet/Kon" element={<Kon />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
