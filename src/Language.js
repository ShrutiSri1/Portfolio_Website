import React from 'react';

import LanguageData from "./LanguageData";
import Card from './Card';
const Language
    = () => {
        return (
            <>
                <div className="my-5">
                    <h1 className="text-center "><strong>Languages
                </strong></h1>
                </div>
                <div className="container-fluid  mb-5">
                    <div className="row ">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                {
                                    LanguageData.map((val, ind) => {
                                        return <Card key={ind}
                                            imgsrc={val.imgsrc}
                                            title={val.title}
                                        />
                                    })
                                }


                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
export default Language
    ;