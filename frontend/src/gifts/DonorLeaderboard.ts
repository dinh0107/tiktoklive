export interface DonorScore {
  userId: string;
  username: string;
  diamonds: number;
  characterId: string;
}

/**
 * Session leaderboard — highest total diamonds wins the big screen.
 */
export class DonorLeaderboard {
  private readonly byUser = new Map<string, DonorScore>();
  private top: DonorScore | null = null;

  /** Add gift diamonds; returns score + whether #1 changed. */
  add(
    userId: string,
    username: string,
    diamonds: number,
    characterId: string,
  ): { total: number; topChanged: boolean; top: DonorScore } {
    const add = Math.max(0, diamonds);
    const name = username.replace(/^@/, "");
    let row = this.byUser.get(userId);
    if (!row) {
      row = { userId, username: name, diamonds: 0, characterId };
      this.byUser.set(userId, row);
    }
    row.diamonds += add;
    row.username = name;
    row.characterId = characterId;

    const prevId = this.top?.userId ?? null;
    this.recomputeTop();
    const top = this.top!;
    return {
      total: row.diamonds,
      topChanged: top.userId !== prevId,
      top,
    };
  }

  getTop(): DonorScore | null {
    return this.top;
  }

  private recomputeTop(): void {
    let best: DonorScore | null = null;
    for (const row of this.byUser.values()) {
      if (
        !best ||
        row.diamonds > best.diamonds ||
        (row.diamonds === best.diamonds && row.userId < best.userId)
      ) {
        best = row;
      }
    }
    this.top = best;
  }
}
