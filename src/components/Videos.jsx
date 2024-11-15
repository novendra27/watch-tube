import { Stack, Box } from "@mui/material"

import { VideoCard, ChannelCard } from "./"

const Videos = ({ videos, direction }) => {
    if (!videos?.length) return 'Loading...'
    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
            {videos && videos.map((item, index) => (
                item?.id?.videoId || item?.id?.channelId ? ( // Cek jika ada videoId atau channelId, dan abaikan playlistId
                    <Box key={index}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channelDetail={item} />}
                    </Box>
                ) : null
            ))}
        </Stack>
    )
}

export default Videos