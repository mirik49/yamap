import {Placemark, SearchControl, YMaps, Map} from "react-yandex-maps";
import React, {useEffect, useState} from "react";
import {apiGetDepartmens} from "../services/Api";

export const LocalMap = () => {
    const apiKey = "";
    const [departments, setDepartments] = useState({});

    useEffect(() => {
        apiGetDepartmens().then((response) => {
            setDepartments(response.data.data);
        });
    }, []);

    if(!departments) {
        return <p>Loading...</p>
    }
    return (
            <div className="map">

                <YMaps
                    options={{
                        autoFitToViewport: 'always',
                        presetStorage: 'twirl#blueStretchyIcon'
                    }}
                    query={{
                        apikey: apiKey
                    }}
                >
                    <Map
                        defaultState={{center: [47.2313500, 39.7232800], zoom: 9}}
                        options={{
                            autoFitToViewport: 'always',
                            presetStorage: 'twirl#blueStretchyIcon'
                        }}
                        className="ya-maps"
                        modules={['geoObject.addon.balloon']}

                    >
                        <SearchControl
                        />
                        {Object.keys(departments).map((i, key) => (

                            <Placemark key={key}
                                       geometry={{
                                           // @ts-ignore
                                           type: "Point",
                                           coordinates: [departments[i].map_x, departments[i].map_y]
                                       }}
                                       options={{
                                           preset: 'islands#redStretchyIcon'
                                       }}
                                       properties={{
                                           iconContent: departments[i].number,
                                           balloonContentHeader: departments[i].name,
                                           balloonContentBody: departments[i].schedule,

                                       }}
                            />
                        ))}
                    </Map>
                </YMaps>
            </div>
    )
}

export default LocalMap;
