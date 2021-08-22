import axios from 'axios';

const getCep = async (cep)=>{
    const cepInfoResponse = await axios.get(`http://localhost:3001/getCep/${cep}`);
        
    const cepInfo = cepInfoResponse.data.cepInfo;
    
    return cepInfo;
}

export default getCep;