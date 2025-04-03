import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const OurServicesBlock = () => {
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
                Наши услуги
            </Typography>

            <Box sx={{marginBottom: '15px'}}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: { xs: '5px', sm: '10px' }
                }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Организация госпитализации
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Быстрая запись на обследования,
                        процедуры и лечение.</Typography>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Подбор клиники, специализирующейся
                        на конкретном заболевании.</Typography>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Согласование условий
                        госпитализации.</Typography>
                </Box>
            </Box>

            <Box sx={{marginBottom: '15px'}}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: { xs: '5px', sm: '10px' }
                }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Транспортировка пациента
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Организация транспортировки в Москву любым удобным способом: на специализированном транспорте, авиацией или автомобилем.</Typography>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Сопровождение медицинским персоналом при необходимости.</Typography>
                </Box>
            </Box>

            <Box sx={{marginBottom: '15px'}}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: { xs: '5px', sm: '10px' }
                }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Поддержка на всех этапах
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Оформление необходимых документов.</Typography>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Консультации по всем организационным вопросам.</Typography>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Сопровождение и после выписки.</Typography>
                </Box>
            </Box>

            <Box sx={{marginBottom: '15px'}}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: { xs: '5px', sm: '10px' }
                }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 22, sm: 24 }, fontWeight: 500 }}>
                        Послеоперационная и реабилитационная поддержка
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Координация программ восстановления.</Typography>
                    <Typography variant="h4" sx={{ fontSize: { xs: 18, sm: 20 } }}>— Организация патронажного ухода на дому.</Typography>
                </Box>
            </Box>

        </Box>
    );
};
