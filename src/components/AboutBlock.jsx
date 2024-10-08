import {Box, Typography} from '@mui/material'

export const AboutBlock = () => {
    return (
        <Box
            component="section"
            id="about"
            sx={{
                scrollMarginTop: {xs: '120px', sm: '50px'},
                paddingX: '12px',
                paddingY: {xs: '25px', sm: '50px'},
                color: 'var(--black)'
            }}
        >

            <Typography variant="h4" sx={{marginBottom: '20px', fontSize: {xs: '28px', sm: '34px'}, fontWeight: 500}}>О
                нас</Typography>

            <Typography
                component="p"
                sx={{
                    fontSize: 20,
                    // marginBottom: '10px'
                }}
            >
                Московская Сервисная Компания (МСК-Групп) уже 10 лет оказывает услуги платной госпитализации и
                транспортировки
                пациентов в ведущие клиники Москвы в круглосуточном режиме.
            </Typography>
            {/*<Typography component="p" sx={{fontSize: 20}}>
                Наша компания работает на базе ФГБУ "Объединенная больница с поликлиникой" Управления Делами Президента
                РФ.
            </Typography>*/}
        </Box>
    )
}
