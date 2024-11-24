import {
  SettingsOptionsCardContainer,
  SettingsOptionsCardSpan,
} from "./settings-options-card.styles";

const SettingsOptionsCard = ({ children, name }) => {
  return (
    <SettingsOptionsCardContainer>
      <SettingsOptionsCardSpan>{name}</SettingsOptionsCardSpan>
      {children}
    </SettingsOptionsCardContainer>
  );
};

export default SettingsOptionsCard;
