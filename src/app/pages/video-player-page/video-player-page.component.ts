import { Component, OnInit } from '@angular/core';
import { SSVideoSource, SSPlayerConfig, SSLoopType } from '../../common/components/ss-video-player/ss-video-player.component';

@Component({
    templateUrl: 'video-player-page.html'
})
export class VideoPlayerPageComponent implements OnInit {
    playerConfig: SSPlayerConfig = {
        loop: SSLoopType.All,
        autoplay: false,
        trackUser: true
    };
    videoSources: SSVideoSource[] = [];

    ngOnInit(): void {
        this.videoSources = [
            {
                title: 'Iphone 15 pro max',
                poster: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845699311',
                source: 'https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_stereo.ogg'
            },
            {
                title: 'Samsung flip 5',
                poster: 'https://images.samsung.com/is/image/samsung/p6pim/th/feature/164698402/th-feature-galaxy-z-flip5-f731-537759009?$FB_TYPE_A_JPG$',
                source: 'http://ftp.nluug.nl/pub/graphics/blender/demo/movies/Sintel.2010.1080p.mkv'
            },
            {
                title: 'Nokia 3310',
                poster: 'https://s.isanook.com/hi/0/ud/301/1509693/nk3310.jpg?ip/crop/w728h431/q80/webp',
                source: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm'
            }
        ];
    }
}
