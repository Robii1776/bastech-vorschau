const words = ["Service", "Revision", "Reparatur", "Ersatzteile", "Occasionen"];

/**
 * Kinetisches Umriss-Textband: benennt das Kerngeschäft, bringt Bewegung
 * zwischen die Sektionen. Rein dekorativ, deshalb aria-hidden.
 */
export function KineticBand() {
  const line = words.map((w) => `${w}`).join("  ·  ");
  return (
    <div aria-hidden className="select-none overflow-hidden bg-bg py-10">
      <div className="kinetic-track">
        <span className="pr-10">{line}&nbsp;&nbsp;·&nbsp;&nbsp;</span>
        <span className="pr-10">{line}&nbsp;&nbsp;·&nbsp;&nbsp;</span>
      </div>
    </div>
  );
}
