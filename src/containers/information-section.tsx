import Wrapper from '@/components/elements/wrapper';

import ProfileSection from './profile-section';
import SettingsSection from './settings-section';

export default function InformationSection() {
    return (
        <Wrapper>
            <ProfileSection
                content={{
                    title: 'De Fabriek',
                    description:
                        'Aha, je bent terug! Net op tijd: Onze eerste bestelling is binnen. Een lokale school wil haar studenten vegetarische lunch maaltijden aanbieden. Stel de machines in voor...',
                    richText: `Een gezonde <strong>vegetarische</strong> pizza met 7
                    gepaste ingrediënten.`,
                }}
            />
            <SettingsSection />
        </Wrapper>
    );
}
