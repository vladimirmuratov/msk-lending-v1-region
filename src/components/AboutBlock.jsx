import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const AboutBlock = () => {
    return (
        <Box
            component="section"
            id="about"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography
                variant="h2"
                sx={{
                    color: 'var(--main-color)',
                    marginBottom: '20px',
                    fontSize: { xs: '28px', sm: '34px' },
                    fontWeight: 500
                }}>
                О нас
            </Typography>

            <Typography
                component="p"
                sx={{
                    fontSize: { xs: 18, sm: 20 },
                    // marginBottom: '10px'
                }}
            >
                <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box> — частная
                медицинская компания, специализирующаяся на организации госпитализации пациентов из
                регионов в ведущие московские клиники. Наша цель — сделать качественную медицинскую помощь доступной для
                всех, независимо от географии проживания.  Мы стремимся предоставить каждому пациенту возможность получить современное лечение, консультации лучших
                специалистов и доступ к передовым технологиям.
            </Typography>

        </Box>
    );
};
