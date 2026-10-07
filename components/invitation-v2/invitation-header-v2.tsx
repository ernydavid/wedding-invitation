import styles from "./wedding-invitation-v2.module.css";

// Preserved for reuse; the V2 hero intentionally renders without a header.
export function InvitationHeaderV2() {
  return (
    <header className={styles.header} data-v2-nav>
      <a className={styles.brand} href="#inicio" aria-label="Ir al inicio">
        J <span>&amp;</span> M
      </a>
      <nav className={styles.nav} aria-label="Navegación de la invitación">
        <a href="#historia">Nosotros</a>
        <a href="#fecha">Fecha</a>
        <a href="#lugar">Lugar</a>
        <a href="#regalos">Regalos</a>
      </nav>
      <a className={styles.navCta} href="#lugar">Ver detalles</a>
    </header>
  );
}
