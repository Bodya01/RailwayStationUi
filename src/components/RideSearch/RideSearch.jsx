import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import StationService from "../../api-service/station-service/StationService"
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import moment from 'moment'
import s from './RideSearch.module.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const RideSearch = () => {
    const [value, setValue] = useState(new Date());

    const [stations, setStations] = useState([]);
    const [allStations, setAllStations] = useState([]);

    const [chosenFromStation, setChosenFromStation] = useState(null);
    const [chosenToStation, setChosenToStation] = useState(null);

    useEffect(() => {
        StationService.getAllStations().then(res => {
            const st = res.data
            let temp = []
            st.forEach(s => {
                temp.push({label: s.name, value: s.id})
            })

            setAllStations(temp)
        })
    }, [])



    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          background: '#fff',
          borderColor: '#9e9e9e',
          minHeight: '56px',
          height: '56px',
          boxShadow: state.isFocused ? null : null,
        }),
    
        valueContainer: (provided, state) => ({
          ...provided,
          height: '56px',
          padding: '0 6px'
        }),
        indicatorsContainer: (provided, state) => ({
          ...provided,
          height: '56px',
        })}

    return (
        <div className={s.search_wrapper}>
            <div className={s.search_element}>
                <Select
                    options={allStations}
                    styles={customStyles}
                    placeholder="From"
                    onChange={s => {setChosenFromStation(s)}}
                />
            </div>
            <div className={s.search_element}>
                <Select
                    options={allStations}
                    styles={customStyles}
                    placeholder="To"
                    onChange={s => {setChosenToStation(s); console.log(s)}}
                />
            </div>
            <div className={s.search_element}>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DesktopDatePicker
                        value={value}
                        minDate={moment('2017-01-01')}
                        onChange={(newValue) => {
                            setValue(newValue);
                            console.log(newValue.format('DD-MM-yyyy'))
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            <div className={s.search_element}>
                <button className='btn btn-primary btn-lg' style={{width: '100%', margin: '5px auto 5px'}}>Search</button>
            </div>
        </div>
    )

}

export default RideSearch;