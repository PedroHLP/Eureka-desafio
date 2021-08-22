import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import getCep from '../../utils/getCep';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '18ch',
        marginLeft: '50ch'
      },
    },
    button: {
        marginLeft: '53ch'
    },

  }));

const Home = ()=>{
    const [cep, setCep] = React.useState('');
    const [cepInfo, setCepInfo] = React.useState({}); 
    const classes = useStyles();

    const getCepInfo = async (cep)=>{
        const cepInfoResponse = await getCep(cep);
        setCepInfo(cepInfoResponse);
    }

    function handleChange(e){
        var cepWithMask = cepmask(e.target.value, "standard-basic" );
        setCep(cepWithMask);
    }

    function cepmask(value) {
        var cep = value.replace(/\D/g, '');
        cep = cep.substring(0,5)+"-"+cep.substring(5);

        return cep.slice(0,9);
    }

    return(
        <>
            <div id="icon">
                Desafio ViaCep
            </div>
            <Divider />

            <div className="cep-fit">
            <TextField id="standard-basic"  label="CEP:" name="cep" value={cep} onChange={handleChange}/>
            <Button variant="contained" className="button-color" onClick={()=> getCepInfo(cep)}>
                Buscar Cep
            </Button>
            </div>
            
            <div className="dale">
                <span>
                    Cep: {cepInfo.cep}
                </span><br/>
                <span>
                    Logradrouro: {cepInfo.logradouro}
                </span><br/>
                <span>
                    Bairro: {cepInfo.bairro}
                </span><br/>
                <span>
                    Município: {cepInfo.localidade}
                </span><br/>
                <span>
                    Uf: {cepInfo.uf}
                </span><br/>
            </div>
        </>
    )
}
export default Home;