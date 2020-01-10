import React, {fragment} from 'react'

export default class Player extends React.Component {
    render () {
        return (
            <>
                <div id="app-cover">
                <div id="bg-artwork"></div>
                <div id="bg-layer"></div>
                <div id="player">
                    <div id="player-track">
                        <div id="album-name"></div>
                        <div id="track-name"></div>
                        <div id="track-time">
                            <div id="current-time"></div>
                            <div id="track-length"></div>
                        </div>
                        <div id="s-area">
                            <div id="ins-time"></div>
                            <div id="s-hover"></div>
                            <div id="seek-bar"></div>
                        </div>
                    </div>
                    <div id="player-content">
                        <div id="album-art">
                            <img src="https://raw.githubusercontent.com/Kapilshahi8/musics/mymusic/avril_lavigne_complicate.jpg" className="active" id="_1" />
                            <img src="https://raw.githubusercontent.com/Kapilshahi8/musics/mymusic/carly_rae_jepsen_call_me_maybe.jpg" id="_2" />
                            <img src="https://raw.githubusercontent.com/Kapilshahi8/musics/mymusic/owl_city_carly_rae_jepsen_good_time.jpg" id="_3" />
                            <img src="https://raw.githubusercontent.com/Kapilshahi8/musics/mymusic/owl_city_shooting_star.jpg" id="_4" />
                            <img src="https://raw.githubusercontent.com/Kapilshahi8/musics/mymusic/owl_city_to_the_sky.jpg" id="_5" />
                            <img src="https://raw.githubusercontent.com/Kapilshahi8/musics/mymusic/Jatti_Da_Crush.jpg" id="_6" />
                            <img src="https://raw.githubusercontent.com/Kapilshahi8/musics/mymusic/Teri.jpg" id="_7" />
                            <div id="buffer-box">Buffering ...</div>
                        </div>
                        <div id="player-controls">
                            <div className="control">
                            <div className="button" id="play-previous">
                                <i className="fas fa-backward"></i>
                            </div>
                            </div>
                            <div className="control">
                            <div className="button" id="play-pause-button">
                                <i className="fas fa-play"></i>
                            </div>
                            </div>
                            <div className="control">
                            <div className="button" id="play-next">
                                <i className="fas fa-forward"></i>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </>
        )
    }
}