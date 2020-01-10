import React from 'react';
import AppHeader from '../AppHeader';
import AppNav from '../AppNav';
import AppFooter from '../AppFooter';
import Home from '../../Home'

const AppMain = ()=>{
  return (
    <section className="vbox">
        <AppHeader/>
        <section>
            <section className="hbox stretch">
                <AppNav/>
                <section id="content">
                    <section className="hbox stretch">
                        <section>
                            <section className="vbox">
                                <Home/>
                                <AppFooter/>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    </section>
  );
}

export default AppMain;
