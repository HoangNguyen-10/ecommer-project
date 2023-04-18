import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
export default function TermAndCondition() {
    return (
        <div>
            <Meta title={'Term and Condition'} />
            <BreadCrumb title='Term and Condition' />
            <section className="policy-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
