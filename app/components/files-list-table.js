import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FileTableComponent extends Component {
  @tracked selected = [];

  get files() {
    return this.args.files ?? [];
  }

  getUniqueId(file) {
    return `${file.name}|${file.device}|${file.path}`;
  }

  /**
   * Derived States
   */
  get selectedCount() {
    return this.selected.length;
  }

  get allCount() {
    return this.files.length;
  }

  get allChecked() {
    return this.allCount > 0 && this.selectedCount === this.allCount;
  }

  get someChecked() {
    return this.selectedCount > 0 && this.selectedCount < this.allCount;
  }

  get selectionLabel() {
    return this.selectedCount === 0 ? 'None Selected' : `Selected ${this.selectedCount}`;
  }

  /**
   * Utility Methods
   */
  isAvailable(file) {
    return file.status.toLowerCase() === 'available';
  }

  statusLabel(file) {
    const s = file.status.toLowerCase();
    return s === 'available' ? 'Available' : 'Scheduled';
  }

  // rowSelected(file) {
  //   return this.selected && this.selected.includes(this.getUniqueId(file));
  // }

  @action
  toggleRow(file, event) {
    const key = this.getUniqueId(file);
    const checked = event.target.checked;

    if (checked) {
      if (!this.selected.includes(key)) {
        // IMPORTANT: reassign to trigger reactivity
        this.selected = [...this.selected, key];
      }
    } else {
      this.selected = this.selected.filter((k) => k !== key);
    }
  }

  @action
  toggleAll(event) {
    const checked = event.target.checked;
    this.selected = checked ? this.files.map((f) => this.getUniqueId(f)) : [];
  }

  @action
  downloadSelected() {
    const chosen = this.files.filter(
      (f) => this.selected.includes(this.getUniqueId(f)) && this.isAvailable(f)
    );

    if (chosen.length === 0) {
      alert('No downloadable items selected.');
      return;
    }

    const lines = chosen.map((f) => `${f.path} — ${f.device}`);
    alert(lines.join('\n'));
  }
}