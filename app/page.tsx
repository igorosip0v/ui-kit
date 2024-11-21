import { Chip, ChipIconExample } from '@/components/Chip';

export default function Home() {
  return (
    <div className="min-h-dvh grid gap-y-4 content-start">
      <div>
        <div>Chip component:</div>
        <div className="flex gap-4">
          <Chip label="Without icon" />
          <Chip icon={<ChipIconExample />} label="Free $0" variant="default" />
          <Chip
            icon={<ChipIconExample variant="success" />}
            label="Completed"
            variant="success"
          />
          <Chip
            icon={<ChipIconExample variant="warning" />}
            label="Processing"
            variant="warning"
          />
          <Chip
            icon={<ChipIconExample variant="error" />}
            label="Failed"
            variant="error"
          />
          <Chip
            icon={<ChipIconExample variant="important" />}
            label="Important"
            variant="important"
          />
          <Chip
            icon={<ChipIconExample variant="important" color="#9D50FF" />}
            label="Different colors"
            variant="important"
            className="bg-success-100 text-primary-pink"
          />
        </div>
      </div>

      {/* Other components below */}
    </div>
  );
}
