import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const MainInfoBlock = () => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography variant="h2" sx={{
                color: 'var(--main-color)',
                marginBottom: '20px',
                fontSize: { xs: '28px', sm: '34px' },
                fontWeight: 500
            }}>
                Ваше здоровье – наша забота: госпитализация в московскую клинику из регионов
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                В <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box> с радостью
                открываем двери для каждого клиента – здесь здоровье и благополучие занимают
                центральное место! Занимаясь качественным медицинским сервисом, мы охватываем не только Москву, но также
                распространяем своё присутствие по всей России и странам СНГ. Наша цель — обеспечить госпитализацию на
                пике комфорта и безопасности для каждого обратившегося к нам пациента.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box> осуществляет
                комплексное сопровождение госпитализации, включая транспортировку из разных
                уголков России и стран СНГ прямо до специализированных клиник. Мы обеспечиваем не только встречу
                иногородних пациентов на вокзалах или в аэропорту, но также предоставляем оперативную помощь с участием
                бригад скорой медицинской помощи.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box> — ваш
                надежный партнер для оказания скорой помощи и транспортировки маломобильных пациентов
                как внутри одного города, так и по всей России. Быстрое реагирование в экстренных случаях или
                организация планового переезда к лучшим медицинским центрам столицы — наш приоритет!
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                Выбирая <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box> для
                сохранения здоровья и продления активного долголетия, вы делаете ставку на
                непрерывную заботу профессионалов медицинского сообщества. Мы – ваш верный спутник в поддержании
                хорошего самочувствия 24/7, где бы вы ни находились! Доверьтесь нам — мы гарантируем качество жизни и
                надежность на каждом этапе лечения.
            </Typography>
        </Box>
    );
};
