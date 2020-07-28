import React, { Component } from 'react';
import Typical from 'react-typical';

function CoverPic() {
    return (
        <div className="row g">
            <div className="col-xs-12 col-md-12">
                <div className="flex-container target">
                    <div className="flex-container ko">
                        <p class="uo">
                            <Typical
                                steps={['Masters Of Communication', 3000]}
                                loop={1}
                                wrapper="p"
                            />
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CoverPic